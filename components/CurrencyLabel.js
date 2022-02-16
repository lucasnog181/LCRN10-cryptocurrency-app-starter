
import React from 'react';
import { Image, Text, View } from 'react-native';

import { COLORS,SIZES,FONTS } from '../constants';

const CurrencyLabel = ({icon , currnecy , code}) => {
  return(
      <View style={{ flexDirection: 'row'}}>
         <Image
           source={icon}
           style={{
             width:25,
             height:25,
             marginTop: 5
           }}
         />
         <View style={{marginLeft: SIZES.base}}>
              <Text style={{...FONTS.h3}}>{currnecy}</Text>
              <Text style={{color: COLORS.gray, ...FONTS.body4}}>{code}</Text>
         </View>
      </View>
  );
}

export default CurrencyLabel;