import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { View, StyleSheet, Alert } from 'react-native';

import Input from './../components/Input';
import PropTypes from 'prop-types';
import CustomButton from '../components/CustomButton';
import { STYLES } from '../constants';
import Loading from '../components/Loading';
import i18n from './../utils/i18n';


class RegisterScreen extends Component {
  constructor(props) {
    super(props);

    this.inputs = {};
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    createNewUser: PropTypes.func.isRequired,
  }

  state = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    isLoading: false,
  };

  onCreateUser = () => {
    this.setState({ isLoading: true });
    const { email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      Alert.alert(i18n.t('register.passwordAlertTitle'), i18n.t('register.passwordMatch'));
    } else {
      const payload = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      };

      this.props.createNewUser(email, password, payload, (err) => {
        this.setState({ isLoading: false });
        if (!err) {
          this.props.navigation.navigate('App');
        }
      });
    }
  };

  render() {
    if (this.state.isLoading)
      return <Loading/>;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView containerStyle={{ flex: 1 }} enableOnAndroid={true} enableAutomaticScroll={true}>
          <View>
            <Input
              handleChange={(email) => this.setState({ email })}
              label={i18n.t('common.email')}
              returnKeyType="next"
              onRef={(ref) => { this.inputs['emailInput'] = ref; }}
              onSubmitEditing={() => this.inputs['firstNameInput'].focus()}
              keyboardType="email-address" />

            <Input
              handleChange={(firstName) => this.setState({ firstName })}
              label={i18n.t('common.firstName')}
              returnKeyType="next"
              onRef={(ref) => { this.inputs['firstNameInput'] = ref; }}
              onSubmitEditing={() => this.inputs['lastNameInput'].focus()} />

            <Input
              handleChange={(lastName) => this.setState({ lastName })}
              label={i18n.t('common.lastName')}
              returnKeyType="next"
              onRef={(ref) => { this.inputs['lastNameInput'] = ref; }}
              onSubmitEditing={() => this.inputs['passwordInput'].focus()} />

            <Input
              handleChange={(password) => this.setState({ password })}
              label={i18n.t('common.password')}
              returnKeyType="next"
              onRef={(ref) => { this.inputs['passwordInput'] = ref; }}
              onSubmitEditing={() => this.inputs['confirmPasswordInput'].focus()}
              secureTextEntry={true} />

            <Input
              handleChange={(confirmPassword) => this.setState({ confirmPassword })}
              label={i18n.t('common.confirmPassword')}
              returnKeyType="done"
              onRef={(ref) => { this.inputs['confirmPasswordInput'] = ref; }}
              onSubmitEditing={this.onCreateUser}
              secureTextEntry={true} />
          </View>
        </KeyboardAwareScrollView>

        <View style={styles.buttonContainer}>
          <CustomButton
            title={i18n.t('register.signUpButton')}
            color={STYLES.COLORS.PURPLE} onPress={this.onCreateUser}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  buttonContainer: {
    bottom: 0,
    width: '100%',
    elevation: 5,
  }
});

export default RegisterScreen;
