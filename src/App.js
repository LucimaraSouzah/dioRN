import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/95291739?v=4';
const urlToMyGithub = 'https://github.com/LucimaraSouzah';

const App = () => {
  const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Foto da Lucimara em preto e branco"
          source={{uri: imageProfileGithub}}
          style={style.avatar}></Image>

        <Text
          acessibilityLabel="Nome: Lucimara Souza"
          style={[style.defaultText, style.name]}>
          Lucimara Souza
        </Text>

        <Text
          acessibilityLabel="Nome de usuário: LucimaraSouzah"
          style={[style.defaultText, style.nickname]}>
          LucimaraSouzah
        </Text>

        <Text
          acessibilityLabel="Descrição do Github: Web Developer, Front-End, ReactJS"
          style={[style.defaultText, style.description]}>
          Web Developer | Front-End | ReactJS
        </Text>

        <Pressable onPress={handlePressGoToGithub}>
          <View>
            <Text style={[style.button, style.defaultText, style.textButton]}>
              Open in Github
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 1.5,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 18,
    color: colorDarkFontGithub,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
