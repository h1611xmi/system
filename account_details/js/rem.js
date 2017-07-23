(function(win,doc){
    //���������ʱ
    win.onresize=function(){
        change();
    };
    change();
    function change(){
        var oFs=doc.documentElement.clientWidth/(320/20);

        //���ø�Ŀ¼�����С
        doc.documentElement.style.fontSize=oFs+'px';
    }
})(window,document);/**
 * Created by 123 on 2017/7/18.
 */
