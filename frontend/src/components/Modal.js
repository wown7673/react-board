
import styles from "../styles/Modal.module.css";
export default function Modal({onModalOpen, onCancleWrite}) {

    // 계속작성
    function handleKeep(){
        onModalOpen(false);
    }

    // 작성취소
    function handleCancle(){
        onModalOpen(false);
        onCancleWrite();
    }

    return (
        <>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <p>작성 중인 내용이 있습니다. 작성을 취소하시겠습니까?</p>
                    <button onClick={handleKeep}>계속작성</button>
                    <button onClick={handleCancle}>작성취소</button>
                </div>
            </div>
        </>
    );
}