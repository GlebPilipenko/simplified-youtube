import { Component } from 'react';
import { ShallowWrapper } from 'enzyme';

export type WrapperType = ShallowWrapper<{}, Component['state'], Component>;
