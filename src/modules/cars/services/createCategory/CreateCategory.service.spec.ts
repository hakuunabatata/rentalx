import { AppError } from '@shared/errors'
import { CategoriesRepositoryTest, CreateCategoryService } from '@modules'

let createCategory: CreateCategoryService
let categoriesRepository: CategoriesRepositoryTest

describe('Create category', () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepositoryTest()
    createCategory = new CreateCategoryService(categoriesRepository)
  })

  it('should be able to create a new category', async () => {
    const category = {
      name: 'CategoryTest',
      description: 'Category description in test',
    }

    await createCategory.execute(category)

    const categoryCreated = await categoriesRepository.findByName(category.name)

    expect(categoryCreated).toHaveProperty('id')
  })

  it('should not be able to create a duplicated category', async () => {
    expect(async () => {
      const category = {
        name: 'CategoryTest',
        description: 'Category description in test',
      }

      await createCategory.execute(category)

      await createCategory.execute(category)
    }).rejects.toBeInstanceOf(AppError)
  })
})
