import React, {useState, useEffect} from 'react'

import {Text,Image, ScrollView, ImageBackground} from 'react-native'

import {Main, BtnAddTemplate, Titulo, Navbar, Linha, Texto, TemplateHome, Footer, BtnDelete} from './Style'

import { Card, Button } from 'react-native-elements'

import Axios from 'axios'

import {useNavigation} from '@react-navigation/native'

import {MeuIp} from '../../services/MeuIp'

import dayjs from 'dayjs'

require('dayjs/locale/pt-br')

MeuIp.map((item, index) => {
    ip = item.ip
})

const Home = () => {

const [state, setState] = useState({posts: []})


const navigation = useNavigation()

const HandleConcluidos = () => {
    return (
         navigation.navigate('Concluidas')
    )
}
const HandleAdicionar = () => {
    return (
        navigation.navigate('Adicionar')
    )
}

const todays = dayjs().locale("pt-br").format('ddd, D [de], MMMM')


Axios.get(`http://${ip}/api/listTaskFalse`).then(response => {
    setState({
        posts: response.data
    })

}).catch(err => {
    console.log(err)
})


const HandleDelete = (_id) => {
Axios.delete(`http://${ip}/api/delete/${_id}`).then(response => {
    //console.log(response)

    alert('Deletou') // colocar toogle ou mensagem

}).catch(err => {
   //console.log(err)
   alert('Ocorreu um erro ao deletar')
})
}



const HandleUpdate = (_id) => {
    Axios.put(`http://${ip}/api/update/${_id}`, {done: true}).then(response => {
        alert('Terefa concluida')
    }).catch(err => {
        alert('Ocorreu um erro')
    })
}




const {posts} = state


    return (
<ImageBackground style={{width: '100%', height: '100%', minHeight: '100%'}}  source={require('../../images/walpaper2.jpg')}>
<Main>

    <Text style={{fontSize: 19, alignSelf: 'center', marginTop: '16%', color: 'white'}}>HOJE  {todays}</Text>

 <ScrollView>
<Card containerStyle={{backgroundColor: 'white', borderRadius: 40, borderColor: 'black'}}>

    {
        posts.map(posts => 
            <TemplateHome>
          
        
<Texto style={{flexDirection: 'row', marginLeft: '0%'}}>{posts.titulo}</Texto>


 <Button titleStyle={{color: 'red'}}
 containerStyle={{alignSelf: 'center', width: '68%'}}

  icon={<Image style={{height: 20, width: 20, marginRight: '2%'}}
   source={require('../../images/remove.png')}></Image>}

  type="clear" title="Excluir" onPress={() => HandleDelete(posts._id)}>
 </Button>


 <Button titleStyle={{color: 'black'}}
 containerStyle={{alignSelf: 'center', width: '68%'}}
   icon={<Image style={{height: 20, width: 20, marginRight: '2%'}} 
   source={require('../../images/tick.png')}/>}
   type="clear" title="Concluir Tarefa" onPress={() => HandleUpdate(posts._id)}
 >
   
 </Button>


         <Linha/>
          
            </TemplateHome>
            )
    }
    
</Card>
  
</ScrollView>


<Footer>
<BtnAddTemplate onPress={HandleAdicionar}>
<Image style={{height: 50, width: 50, marginLeft: '35%'}} source={require('../../images/add2.png')}/>
<Text style={{marginLeft: '32%', color: 'white'}}>Adicionar</Text>
</BtnAddTemplate>


<BtnAddTemplate onPress={HandleConcluidos}>
<Image style={{height: 50, width: 50, marginLeft: '37%'}} source={require('../../images/correctnew.png')}/>
<Text style={{marginLeft: '32%', color: 'white'}}>Concluidas</Text>
</BtnAddTemplate>


</Footer>

</Main>

</ImageBackground>
    )
}

export default Home