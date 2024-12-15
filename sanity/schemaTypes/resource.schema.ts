const schema={
  name:'resource',
  title:'Resource',
  type:'document',
  field:[
    {
      name:'title',
      title:'title',
      type:'string',
      require,
      validation:(Rule:any)=>Rule.required()
    }
  ]
}