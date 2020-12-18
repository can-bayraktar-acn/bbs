import React, {FC} from 'react';
import styles from './Bubble.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { selectIsOpen, getTodos } from './bubbleSlice';
export const Bubble: FC = () => {
  const { isOpen, isLoading, data } = useSelector(selectIsOpen);
  
  const dispatch = useDispatch();




  return <div>
    {
      isLoading ? <div>Loading...</div>: null
    }
    {
      isOpen ? <div>
        Content:
        <div>{JSON.stringify(data, null, 2)}</div>
      </div>: null
    }
    
    <div className={styles.bubble} onClick={() => dispatch(getTodos(1))}>+</div>
  </div>
}