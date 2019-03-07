class Is {

  defined(v){
    return typeof v !=== 'undefined'
  }
  
  boolean(v){
    return typeof v === 'boolean'
  }
  
  number(v){
    return typeof v === 'number'
  }
  
  array(v){
    return v.constructor === [].constructor
  }
  
  object(v){
    return v.constructor === {}.constructor
  }

}
