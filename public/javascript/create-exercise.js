let tags_id = [];
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
            tags_id,
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
        tags_id.push($(this).attr('id'));
        console.log(tags_id);
    
    } else if ($(this).prop('checked', false)) {
        tempArr = [];
        tempArr = tags_id.filter((tag) => {
            return $(this).attr('id') != tag 
        })
        tags_id = tempArr;
        
        console.log(tempArr);
        // console.log(tags_id);
    }
});



document.querySelector(".new-exercise-form").addEventListener('submit', newExerciseHandler);