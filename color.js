    var Body = {
    	setColor: function(color) {
        $('body').css('color', color);
        },
        setBackgroundColor: function(color) {
        $('body').css('backgroundColor', color);
         }
         }

   var Links = {
    setColor: function(color) {
        $('a').css('color', color);
     }
    }
 
 
 function nightDayHandler(self) {
               // var target = document.querySelector('body');
                if (self.value === 'night') {
                    BodySetBackgroudSetColor('black');
					Body.setBackgroundColor('black');
					
                    BodySetColor('white')
					Body.setColor('white');
					
                    self.value = 'day'
                    LinksSetColor('powderblue');
					Links.setColor('powderblue');
					
                } else {
                    BodySetBackgroudSetColor('white');
					Body.setBackgroundColor('white');
					
                    BodySetColor('black');
					Body.setColor('black');
					
                    self.value = 'night'
                    LinksSetColor('blue');
					Links.setColor('blue');
                }
            }