import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

////Actions////

{
    type: ADD_COMMENT,
    text: 'example',
	id: 1,
	votes: 0
}

{
    type: REMOVE_COMMENT,
    id: 4
}

{
    type: EDIT_COMMENT,
    id: 1,
    text: 'edit'
}

{
    type: THUMB_UP_COMMENT,
    id: 4,
    votes: 3
}

{
    type: THUMB_DOWN_COMMENT,
    id: 1,
    votes: 2
}

////Action Creators////

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4(),
		votes: 0
    }
}

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
        id
    }
}

function editComment(id, text) {
	return {
        type: EDIT_COMMENT,
		id,
		text
    }
}

function thumbUpComment(id, votes) {
	return {
		type: THUMB_UP_COMMENT,
        id,
		votes: votes + 1
    }
}

function thumbDownComment(id, votes) {
	return {
		type: THUMB_DOWN_COMMENT,
        id,
		votes: votes - 1
    }
}