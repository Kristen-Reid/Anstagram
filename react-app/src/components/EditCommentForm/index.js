import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments, updateComment } from '../../store/comment';
import './editCommentForm.css';
