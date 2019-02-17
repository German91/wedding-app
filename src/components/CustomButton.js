import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';


const propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const CustomButton = props => {
  return (
    <Button
      title={props.title}
      color={props.color}
      buttonStyle={[
        styles.buttonStyle,
        {
          ...props.style,
          backgroundColor: props.color
        }
      ]}
      onPress={props.onPress} />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    padding: 12,
  }
});

CustomButton.propTypes = propTypes;

export default CustomButton;
