(function() {

    var output = PUBNUB.$('output'), 
        input = PUBNUB.$('input'), 
        button = PUBNUB.$('button'),
        avatar = PUBNUB.$('avatar'),
        presence = PUBNUB.$('presence');

    var channel = 'mchat';
    

    
    // Assign a random avatar in random color
    avatar.className = 'face-' + ((Math.random() * 13 + 1) >>> 0) + ' color-' + ((Math.random() * 10 + 1) >>> 0);

    var p = PUBNUB.init({
        subscribe_key: 'sub-c-869a96b2-aa57-11e7-8d62-62090b44bf58',
        publish_key:   'pub-c-e34f7caf-2464-4b86-aa7b-f036ac67dd2d'
    });


    p.subscribe({
        channel  : channel,
        callback : function(m) { 
            output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' +  m.text.replace( /[<>]/ig, '' ) + '</span></p><br>' + output.innerHTML; 
        },
        presence: function(m){
            if(m.occupancy > 1) {
                presence.textContent = m.occupancy + ' people online';
            } else {
                presence.textContent = 'Nobody else is online';
            }
        }
    });

    p.bind('keyup', input, function(e) {
        (e.keyCode || e.charCode) === 13 && publish()
    });

    p.bind('click', button, publish);

    function publish() {
        p.publish({
            channel : channel, 
            message : {avatar: avatar.className, text: input.value}, 
            x : (input.value='')
        });
    }

        p.history({
       channel: 'mchat',
       callback: function(m){ 
           
           

           for (i = 0; i < Object.keys(m[0]).length; i++) {
   

               
               
            output.innerHTML = '<p><i class="' + m[0][i].avatar + '"></i><span>' +  m[0][i].text + '</span></p><br>' + output.innerHTML; 
               
               } 
           console.log(Object.keys(m[0]).length)},
       count: 100
    });
    


})();