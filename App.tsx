/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component, PropsWithChildren, useState } from 'react';
import {StyleSheet, Text,View,Button, TouchableHighlight ,TouchableOpacity, ScrollView, Image, TextInput, FlatList, SectionList} from 'react-native';

/*
const helloWorldApp = () => {
  return (
    <View
      style = {{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
      }}>
        
        <Text>Hello World!</Text>
    </View>


  )
}

export default helloWorldApp;
*/

/*
const styles = StyleSheet.create({
  center:{
    alignItems:'center',
  }
})

type GreetingProps = {
  name:String,
}

const Greeting = (props:GreetingProps) => {
  return(
    <View style={styles.center}>
        <Text>Hello {props.name}!</Text>
    </View>
  );

      
  };
  const LotsOfGreeting = () => {
    return(
    <View style= {[styles.center,{top:100}]}>
      <Greeting name="Ali"/>
      <Greeting name= "Ahmet"/>
      <Greeting name = "Fatma"/>
    </View>
    );



}

// Use <View> Component to use other components as a container.

export default LotsOfGreeting;

*/

/*

// State usage
const App = () => {
  const[count , setCount] = useState(0);
  return(
    <View style = {styles.container}>
      <Text>You clicke {count} times into button</Text>
      <Button 
        onPress={ () => {setCount(count + 1)}}
        title = "Click Me!"/>
      <TouchableHighlight style={styles.buttonReset} >
      <Button onPress={() => setCount(0)}
      title="Reset the number!"/>
      </TouchableHighlight>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignItems:'center',
  },
  buttonReset: {
    marginTop:25,
    backgroundColor:"yellow",
    borderRadius:10,
  }
})

export default App;

*/
/*
class App extends Component {
  state = {
    count:0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style = {styles.button} onPress= {this.onPress}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {this.state.count}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    justifyContent : 'center',
    alignItems: 'center'
  },
  button: {
    alignItems:'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom : 10,
  }
});

export default App;

*/
/*
const App = () => {
  return(
    <ScrollView>
      <Text>Header</Text>
      <View>
        <Text>Some more Text</Text>
        <Image source = {{
          uri:'https://reactnative.dev/docs/assets/p_cat2.png',
        }} 
          style= {{width:200,height:200}}/>
      </View>
      <TextInput style = {{
        height:40,
        borderColor:'grey',
        borderWidth:1
      }} defaultValue="You can type in me"/>
      <Text>Header</Text>
      <View>
        <Text>Some more Text</Text>
        <Image source = {{
          uri:'https://reactnative.dev/docs/assets/p_cat2.png',
        }} 
          style= {{width:200,height:200}}/>
      </View>
      <TextInput style = {{
        height:40,
        borderColor:'grey',
        borderWidth:1
      }} defaultValue="You can type in me"/><Text>Header</Text>
      <View>
        <Text>Some more Text</Text>
        <Image source = {{
          uri:'https://reactnative.dev/docs/assets/p_cat2.png',
        }} 
          style= {{width:200,height:200}}/>
      </View>
      <TextInput style = {{
        height:40,
        borderColor:'grey',
        borderWidth:1
      }} defaultValue="You can type in me"/><Text>Header</Text>
      <View>
        <Text>Some more Text</Text>
        <Image source = {{
          uri:'https://reactnative.dev/docs/assets/p_cat2.png',
        }} 
          style= {{width:200,height:200}}/>
      </View>
      <TextInput style = {{
        height:40,
        borderColor:'grey',
        borderWidth:1
      }} defaultValue="You can type in me"/>
    </ScrollView>
  );
};


export default App;

*/
//  !!!!!!!!!!! JavaScript values are referenced with {} !!!!!!!!!!!!!
/*
const getFullName = (
  firstName:string,
  secondName: string,
  thirdName:string,
 ) => {
  return (`${firstName} ${secondName} ${thirdName ? thirdName : ""}`)
}


const cat = () => {
  return(
    <View>
      <Text>Hello, I am {getFullName("Özgürhan","Polat","123")}</Text>
    </View>
  )
}

export default cat;

*/

/*
type CatProps = {
  name:string
}

const Cat = (props:CatProps) => {
  const [isHungry,setIsHungry] = useState(true);

  return(
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? "hungry" : "full"}!
      </Text>
      <Button
        onPress={ ()=> {
          setIsHungry(false);
        }}
        title = {isHungry ? "Pour me some milk please" : "Thank you!" }
        disabled = {!isHungry}
      />
    </View>
  )

}

const App = () => {
  return(
    <View>
      <Cat name='Caddy 1'/>
      <Cat name='Caddy 2'/>
    </View>
  )
}

export default App;

*/

/// Flex
/*

const Flex = () => {
  return(
    <View style = {[styles.container,
      {
        flexDirection:'column',
      },
      ]}>
        <View style = {{flex:1,backgroundColor:'red'}}></View>
        <View style= {{flex:2, backgroundColor:'darkorange'}}></View>
        <View style = {{flex: 3 , backgroundColor:'green'}}></View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    
  }
})

export default Flex;
*/

//Flex Direction Example
/*

const FlexDirectionBasics = () => {
  const [flexDirection,setFlexDirection] = useState('column');

  return (
    <PreviewLayout
      label= 'flexDirection'
      values={['column','row','row-reverse','column-reverse']}
      selectedValue={flexDirection}
      setSelectedValue= {setFlexDirection}
    >
      <View style = {[styles.box,{backgroundColor:'powderblue'}]}></View>
      <View style = {[styles.box, {backgroundColor:'skyblue'}]}></View>
      <View style = {[styles.box, {backgroundColor:'steelblue'}]}></View>
    </PreviewLayout>
  )
}

type PreviewLayoutProps = PropsWithChildren<{
  label:string;
  values:string[];
  selectedValue:string;
  setSelectedValue: (value:string) => void;
}>


const PreviewLayout = ( {
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
} : PreviewLayoutProps) => {
  return(
    <View style = {{padding:10,flex:1}}>
      <Text style = {styles.label}>{label}</Text>
      <View style = {styles.row}>
        {values.map(value => (
          <TouchableOpacity
            key= {value}
            onPress={ () => setSelectedValue(value)}
            style = {[styles.button,selectedValue === value && styles.selected]}>
              <Text style = {
                [styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
                ]}>
                  {value}
                </Text>
            </TouchableOpacity>
        ))}
      </View>
      <View style = {[styles.container,{[label]:selectedValue}]}>
                {children}
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  button: {
    paddingHorizontal:8,
    paddingVertical:6,
    borderRadius:4,
    backgroundColor:'oldlace',
    alignSelf:'flex-start',
    marginHorizontal:'1%',
    marginBottom:6,
    minWidth: '48%',
    textAlign:'center'
  },
  label: {
    textAlign:'center',
    marginBottom:10,
    fontSize:32,
  },
  row: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  selected: {
    backgroundColor:'coral',
    borderWidth:0,
  },
  container: {
    flex:2,
    marginTop:8,
    backgroundColor:'aliceblue'
  },
  box: {
    width:80,
    height:80
  },
  buttonLabel: {
    fontSize:20,
    fontWeight:'500',
    color:'coral'
  },
  selectedLabel: {
    color:'white'
  }, 
});

export default FlexDirectionBasics;
*/
/*
// TextInput example
const PizzaTranslator = () => {
  const [text,setText] = useState('');
return(
  <View style= {{padding:10}}>
    <TextInput style= {{height:40}}
      placeholder = 'Type here to translate!'
      onChangeText={newText => setText(newText)}
      defaultValue = {text}
      />
      <Text style= {{padding:10, fontSize:42}}>
        {text.split(' ').map(word => word && '🍕').join(" ")}
      </Text>
    
  </View>
)

}
export default PizzaTranslator;
*/

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:22,
  },
  item: {
    padding:10,
    fontSize:18,
    height : 44,
  },
});


const FlatListBasics = () => {
  return(
  <View>
    <FlatList
    data = {[
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
      {key:'Devin'},
    ]} 
    renderItem = {({item}) => <Text style= {styles.item}> 
    {item.key}
    </Text>}
    
    />
  </View>)
}

export default FlatListBasics;

*/

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:22,
  },
  sectionHeader: {
    paddingTop:2,
    paddingLeft:10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize:14,
    fontWeight:'bold',
    backgroundColor:'rgba(247,247,247,1.0)',
    color:'black',
  },
  item: {
    padding:10,
    fontSize:18,
    height:44,
  },
});

const SectionListBasics = () => {
  return(
    <View  style = {styles.container}>
      <SectionList
        sections={[
          {title:'D',data:["Devin",'Dan','Dominic']},
          {title:'J',data: ['Jackson',
                            'James',
                            'Jillian',
                            'Jimmy',
                            'Joel',
                            'John',
                            'Julie',
                          ],
                        },
        ]}
        renderItem = {({item}) => <Text style = {styles.item}>{item}</Text>}
        renderSectionHeader = {({section}) => <Text style= {styles.sectionHeader}></Text>}
        keyExtractor= {item => `basicListEntry-${item}`}
      />

    </View>
  )
};

export default SectionListBasics;
