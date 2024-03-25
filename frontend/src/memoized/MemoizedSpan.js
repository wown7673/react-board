import React, {useMemo} from 'react';

const MemoizedSpan = React.memo(({ children }) => {
    return <span>{children}</span>;
});

export default MemoizedSpan;