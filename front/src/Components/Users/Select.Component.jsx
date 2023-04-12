import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function SelectComponent(props) {
  const { options, userData } = props;
  
  const formattedOptions = [];
  options.forEach((option) => {
    formattedOptions.push({
      value: option.name,
      label: option.label
    })
  })

  const defaultValues = [];
  
  formattedOptions.forEach((option) => {
    userData.forEach((data) => {
      if (data.name === option.value) {
        defaultValues.push(option)
      }
    })
  })

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={defaultValues}
      isMulti
      options={formattedOptions}
    />
  );
}