function AddItem2() {
  let TodoName = "Go to Collage";
  let Date = "19/03/24";
  return (
    <div class="container">
      <div class="row Rows-gap">
        <div class="col-6">
          <p>{TodoName}</p>
        </div>
        <div class="col-4">{Date}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger Buttons">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItem2;
