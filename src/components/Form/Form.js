import React from 'react';
import '../Form/form.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


function Form() {



    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50 + rand();
        const left = 50 + rand();

        return {
            top: `${top}%`,
            left: `${left}%`,
            transform: `translate(-${top}%, -${left}%)`,
        };
    }

    const useStyles = makeStyles((theme) => ({
        paper: {
            position: 'absolute',
            width: 400,
            // backgroundColor: theme.palette.background.paper,
            // borderRadius: '10% 30% 50% 70%',
            // border: '2px solid #000',
            // boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();

    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>

            <h2 id="modal-title">add content</h2>

            <form>
                <input type="url" placeholder='url'></input>

                <select name="content-type" id="content-type">
                    <option value="">content type</option>
                    <option value="dog">link</option>
                    <option value="cat">youtube</option>
                    <option value="hamster">image</option>
                </select>
                <input type="submit"></input>


            </form>


        </div>
    );

    return (
        <div>
            <button type="button" onClick={handleOpen}>
                add
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default Form;



