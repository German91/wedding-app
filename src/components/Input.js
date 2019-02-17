import React, { Component } from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { STYLES } from '../constants';



class Input extends Component {
  componentDidMount() {
    if (this.props.onRef != null) {
      this.props.onRef(this);
    }
  }

  onSubmitEditing = () => {
    this.props.onSubmitEditing();
  }

  focus = () => {
    this.textInput.focus()
  }

  static propTypes = {
    keyboardType: PropTypes.oneOf([
      'email-address',
      'numeric',
      'phone-pad',
      'default',
      'number-pad',
      'decimal-pad'
    ]),
    multiline: PropTypes.bool,
    numberOfLines: PropTypes.number,
    handleChange: PropTypes.func.isRequired,
    onSubmitEditing: PropTypes.func,
    onRef: PropTypes.func,
    placeholder: PropTypes.string,
    returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search', 'send', 'none', 'previous']),
    secureTextEntry: PropTypes.bool,
    label: PropTypes.string,
    reference: PropTypes.string,
  }

  static defaultProps = {
    keyboardType: 'default',
    multiline: false,
    returnKeyType: 'done',
    secureTextEntry: false,
    textContentType: 'none',
  }

  renderLabel = () => {
    const { label } = this.props;

    if (!label) return;
    return <Text style={styles.labelStyle}>{label}</Text>
  }

  render() {
    return (
      <View>
        {this.renderLabel()}
        <TextInput
          autoCapitalize="words"
          keyboardType={this.props.keyboardType}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
          onChangeText={this.props.handleChange}
          onSubmitEditing={this.onSubmitEditing}
          ref={input => this.textInput = input}
          placeholder={this.props.placeholder}
          returnKeyType={this.props.returnKeyType}
          secureTextEntry={this.props.secureTextEntry}
          style={styles.inputStyle}
          underlineColorAndroid={STYLES.COLORS.LIGHT}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle: {
    color: STYLES.COLORS.DARK,
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 60,
    marginBottom: 20,
  }
});


export default Input;
