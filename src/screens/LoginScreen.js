import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LogoImage from './../../assets/icon.png';
import Input from '../components/Input';
import CustomButton from '../components/CustomButton';
import { STYLES } from '../constants';
import Loading from '../components/Loading';
import i18n from './../utils/i18n';



class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.inputs = {};
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    loginWithFacebook: PropTypes.func.isRequired,
    loginWithEmail: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    password: '',
    isLoading: false,
  };

  onLoginButton = () => {
    this.setState({ isLoading: true });
    const { email, password } = this.state;

    this.props.loginWithEmail(email, password, (err) => {
      this.setState({ isLoading: false });

      if (!err) {
        this.props.navigation.navigate('App');
      }
    });
  }

  onFacebookLogin = () => {
    this.setState({ isLoading: true });

    this.props.loginWithFacebook((err) => {
      this.setState({ isLoading: false });

      if (!err) {
        this.props.navigation.navigate('App');
      }
    });
  }


  render() {
    if (this.state.isLoading)
      return <Loading/>

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={LogoImage} style={styles.image} />
        </View>

        <KeyboardAwareScrollView
          containerStyle={{ flex: 1 }}
          enableOnAndroid={true}
          enableAutomaticScroll={true}>

          <Input
            handleChange={(email) => this.setState({ email })}
            label={i18n.t('common.email')}
            returnKeyType="next"
            onRef={(ref) => { this.inputs['emailInput'] = ref; }}
            onSubmitEditing={() => this.inputs['passwordInput'].focus()}
            keyboardType="email-address" />

          <Input
            handleChange={(password) => this.setState({ password })}
            label={i18n.t('common.password')}
            onRef={(ref) => { this.inputs['passwordInput'] = ref; }}
            returnKeyType="done"
            onSubmitEditing={this.onLoginButton}
            secureTextEntry={true} />

          <CustomButton
            title={i18n.t('login.loginButton')}
            onPress={this.onLoginButton}
            style={styles.buttonStyle}
            color={STYLES.COLORS.PURPLE}/>

          <CustomButton
            title={i18n.t('login.facebookButton')}
            onPress={this.onFacebookLogin}
            color={STYLES.COLORS.BLUE}/>

          <TouchableOpacity
            style={styles.createContainer}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.createText}>{i18n.t('login.newAccount')}</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    marginTop: 80,
    alignItems: 'center',
    paddingBottom: 80,
  },
  image: {
    width: 140,
    height: 140,
  },
  buttonStyle: {
    marginBottom: 15,
  },
  createContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  createText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: STYLES.COLORS.DARK,
  }
});

export default LoginScreen;
