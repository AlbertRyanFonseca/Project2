let tagIds = [];
let type_id;
let tempArr; 
async function newExerciseHandler(event) {
    event.preventDefault();
    
    const difficulty_id = document.querySelector('select[name="difficulty"]').value;
    const type_id = document.querySelector('select[name="type"]').value;
    const title = document.querySelector('input[name="exercise-title"]').value;
    const description = document.querySelector('textarea[name="exercise-description"]').value;

    
    
    
    // console.log(tags_id);
    

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            tagIds,
            difficulty_id,
            type_id,
            title,
            description,
            
            

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

$('input:checkbox').click(function() {
    if($(this).prop('checked')) {
        tagIds.push($(this).attr('id'));
        // console.log(tags_id);
    
    } else if ($(this).prop('checked', false)) {
        tempArr = [];
        tempArr = tagIds.filter((tag) => {
            return $(this).attr('id') != tag 
        })
        tagIds = tempArr;
        
        console.log(tagIds);
        console.log(tempArr);
        // console.log(tags_id);
    }
});




document.querySelector(".new-exercise-form").addEventListener('submit', newExerciseHandler);