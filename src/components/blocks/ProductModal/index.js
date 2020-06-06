/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Fragment } from 'react';
import {
  CloseIcon,
  RightChevron,
  SpinnerIcon,
} from 'components/vectors';
import {
  InputWithoutLabel,
  SelectInputWithoutLabel,
  TextArea,
} from 'components/blocks';
import { PepperestContext } from 'components/helpers/constant';
import EscapeCloseModalHelper from 'components/helpers/EscapeCloseModalHelper';
import { AddProductAndServiceForm } from 'components/forms'

const ProductModal = (props) => <AddProductAndServiceForm />

export default ProductModal;
