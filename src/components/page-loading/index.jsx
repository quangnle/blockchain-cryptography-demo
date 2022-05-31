import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../spinner';
import { selectLoading } from '@/store/slices/appSlice';

const PageLoading = ({ show }) => {
  const { loading } = useSelector(selectLoading);
  const showLoading = typeof show === 'boolean' ? show : loading;

  return (
    <div
      className="page-loading"
      style={{ display: showLoading ? '' : 'none' }}
    >
      <div className="loading-content">
        <Spinner />
      </div>
    </div>
  );
};

export default PageLoading;
