new Vue({
    el:'#app',
    data:
    {
        cornertl: 0,
        cornertr: 0,
        cornerbr: 0,
        cornerbl: 0,
        allcorners: 0,
        csscode: ''
    },
    methods:{
        toClipBoard: function() {

            const el = document.createElement('textarea');
            el.value = this.csscode;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            
  
        },
        updateCode: function () {
            if(this.cornertl == this.cornertr && this.cornertr == this.cornerbr && this.cornerbr == this.cornerbl){
                this.csscode = 'border-radius: ' + this.cornertl + "px;";
            }else{
            this.csscode = 'border-radius: ' + this.cornertl + "px " + this.cornertr + "px "+ this.cornerbr + "px "+ this.cornerbl + "px;";
        }
            
            let rectangle = this.$refs.rectangle;
            rectangle.style.borderRadius =  this.cornertl + "px " + this.cornertr + "px "+ this.cornerbr + "px "+ this.cornerbl + "px";
          },
        allCorners: function() {
            
            this.cornertl = this.allcorners;
            this.cornertr = this.allcorners;
            this.cornerbr = this.allcorners;
            this.cornerbl = this.allcorners;
            this.updateCode();
        },
        btnReset: function() {
            
            this.cornertl = 0;
            this.cornertr = 0;
            this.cornerbr = 0;
            this.cornerbl = 0;
            this.allcorners=0;
            this.updateCode();
        }
    },
    mounted: function(){
        this.updateCode();
    }
})