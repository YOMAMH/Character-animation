 function textRightAnm (dom,Lsteap,Csteap,Ltarget,Ctarget,callback){
            function play() {
                right -= Lsteap;
                cs +=Csteap;
                dom.style.left = right + 'px';
                dom.style.opacity = cs;
                if (right <= Ltarget) {
                    dom.style.left = Ltarget + 'px';
                    flag = true;
                }
                if(cs >= Ctarget){
                    dom.style.opacity = Ctarget;
                    type = true;
                }
                if(flag&&type){
                    clearInterval(timer);
                    callback && callback();
                    flag = false;
                    type = false;
                }
            }
            timer = setInterval(play,60);

        }
        function textleftAnm (dom,Lsteap,Csteap,Ltarget,Ctarget,callback){
            function play() {
                ls += Lsteap;
                cs +=Csteap;
                dom.style.left = ls + 'px';
                dom.style.opacity = cs;
                if (ls >= Ltarget) {
                    dom.style.left = Ltarget + 'px';
                    flag = true;
                }
                if(cs >= Ctarget){
                    dom.style.opacity = Ctarget;
                    type = true;
                }
                if(flag&&type){
                    clearInterval(timer);
                    callback && callback();
                    cs = 0;
                    ls = 0;
                    flag = false;
                    type = false;
                }
            }
            timer = setInterval(play,60);

        }