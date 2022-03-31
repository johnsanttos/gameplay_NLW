/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};

// const  { getDefaultConfig }  =  require ( "metro-config" ) ;

// módulo . export  =  ( async  ( )  =>  { 
//   const  { 
//     resolver : { sourceExts , assetExts } 
//   }  =  await  getDefaultConfig ( ) ; 
//   return  { 
//     transformer : { 
//       babelTransformerPath : require .resolv ( " react -native-svg-transformer" ) } , resolvedor : { assetExts : assetExts . filter
    
    
//       ( ext  =>  ext  !==  "svg" ) , 
//       sourceExts : [ ... sourceExts ,  "svg" ] 
//     } 
//   } ; 
// } ) ( ) ;