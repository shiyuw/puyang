export const testFormat = {
    data(){
        return{
            mobileActive:false,
            codeActive:false,
            seconds:0,
            warnActive: false,
            pwdActive: false
        }
    },
    methods:{
        testFormat(type,str){
            let pattern = /[0-9|a-z|A-Z]{6,12}/;
            let patternMap = {
                'password':/^[0-9|a-z|A-Z]{6,12}$/,
                'mobileNum':/^1[0-9]{10}$/,
            }
            return patternMap[type].test(str);
        },
    }
}