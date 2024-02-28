import React from "react"
import { View, ViewStyle,FlatList } from "react-native"
import { Text,Button,Icon,Screen} from "app/components"
import { colors, spacing } from "../theme"

export const Screen1=()=> {
  

  const Bank = [
    { id: '1', name: ' Your Transaction',rb:'You have successfully created your transaction.',date:'27th Jan' },
    { id: '2', name: 'Tetrad                    ',rb:'You have successfully created your transaction.',date:'27th Jan' },
    { id: '3', name: 'Recipient’s Bank  ',rb:'You have successfully created your transaction.',date:'27th Jan' },
    
  ];

  const Bankinfo = [
    { id: '1', ti: 'Beneficiary Name: ',rb:'OLUYEMI ESTHER' },
    { id: '2', ti: 'Payment Reference: ',rb:'GBNG038330512'},
    { id: '3', ti: 'Transfer Type: ',rb:'Bank Transfer.'},
    { id: '4', ti: 'Amount Sent: ',rb:'8.00 GBP.' },
    { id: '5', ti: 'Recipient Gets: ',rb:'8850 NGN.' },
    { id: '6', ti: 'Transaction ID: ',rb:'T210VUM98Z.'},

    
  ];


  const renderItem = ({ item }:{item:any}) => (
   
    <View style={{height:100,width:320,backgroundColor:colors.palette.primary100,alignSelf:'center',borderRadius:10,marginTop:70}}>
    <View style={{flexDirection:'row'}}>
  <Text style={{color:colors.palette.secondary500,fontWeight:'bold',fontSize:16,margin:10}}>
  {item.name}
  </Text>
  <Text style={{marginTop:10,marginLeft:100,fontSize:14,}}>
    {item.date}
  </Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <View style={{height:80,width:230}}>
      <Text style={{color:colors.palette.secondary500,fontSize:12,marginLeft:10,lineHeight:20,fontWeight:"700"}}>
      {item.rb}
  </Text>
      </View>
  
      <Icon icon="tic" size={30} style={{marginLeft:30}}/>
  
    </View>
  </View>
  
  );

  const randerItem2 = ({item}:{item:any}) =>(

    <View style={{marginTop:5}}>
    <View style={{flexDirection:'row'}}>
  <Text style={{color:colors.palette.secondary500,fontWeight:'bold',fontSize:16,marginLeft:25}}>
  {item.ti}
  </Text>
  <Text style={{fontSize:14,color:colors.palette.secondary500,fontWeight:'bold'}}>
    {item.rb}
  </Text>
    </View>
   
  </View>

  );


  return (
    <Screen preset="scroll">

    <View style={$container}>




        <View style={{height:50,width:40}}>
        </View>




        <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
        <Icon icon="back" size={30} style={{marginLeft:spacing.md}}/>

        <Text style={{marginLeft:70,fontWeight:'bold',color:colors.palette.secondary500,fontSize:20}}>Payment Status</Text>

      <Icon icon="clock" size={25} style={{marginLeft:60}}/>
      </View>




      <FlatList
      data={Bank}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />



<FlatList
      data={Bankinfo}
      renderItem={randerItem2}
      keyExtractor={it => it.id}
    />






      <Text style={{fontSize: 15,marginTop:40,lineHeight:30,alignSelf:'center',color:colors.palette.neutral600}}>Payment will arrive instantly</Text>

<Button
style={{width:320,alignSelf:'center',marginTop:10}}
text="Share receipt"
/>


      <Text style={{fontWeight:'bold',fontSize: 15,lineHeight:40,alignSelf:'center',marginVertical:20,color:colors.palette.secondary200}}>Make another transaction</Text>

      <Text style={{fontSize: 15,lineHeight:40,alignSelf:'center',marginVertical:20,color:colors.palette.primary400,textDecorationLine:'underline'}}>Get $10 Bonus</Text>





       
      </View>

     </Screen>
  )
}

const $container: ViewStyle = {
  backgroundColor: colors.background,
}
