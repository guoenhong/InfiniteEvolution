import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dailyLogin, updateStreak, resetStreak } from '../store/characterSlice';
import type { AppState, AppDispatch } from '../store';

export function useDailyLogin() {
  const dispatch = useDispatch<AppDispatch>();
  const lastLoginDate = useSelector((state: AppState) => state.character.lastLoginDate);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const today = new Date().toISOString().split('T')[0];

    if (lastLoginDate !== today) {
      // Apply daily login HP recovery and update lastLoginDate
      dispatch(dailyLogin());

      if (lastLoginDate) {
        const last = new Date(lastLoginDate);
        const now = new Date(today);
        const diffDays = Math.floor((now.getTime() - last.getTime()) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          // Consecutive day — increase streak
          dispatch(updateStreak());
        } else if (diffDays > 1) {
          // Gap detected — reset streak
          dispatch(resetStreak());
        }
      }
      // First ever login (lastLoginDate === null): no streak action needed
    }
  }, [dispatch, lastLoginDate]);
}
