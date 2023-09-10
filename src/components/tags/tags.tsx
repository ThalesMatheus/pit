import React, { useEffect, useState } from 'react'
import { TagsInput, setValue } from 'react-tag-input-component'
const Tags = ({ register, tags, onTagsChange }: any) => {
  const handleTagsChange = (newTags) => {
    onTagsChange(newTags)
  }
  const sexo = []
  useEffect(() => {
    handleTagsChange(tags)
    sexo.push(tags)
    console.log(`aqui ${sexo}`)
  }, [tags, handleTagsChange])

  return (
    <div>
      <TagsInput
        value={tags}
        onChange={handleTagsChange}
        name='fruits'
        placeHolder='enter fruits'
      />
      <em>press enter or comma to add new tag</em>
      {tags && <input type='hidden' {...register('tags')} value={sexo} />}
    </div>
  )
}

export default Tags
