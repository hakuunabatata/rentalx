import { AppError } from '@errors'
import { CategoriesRepositoryTest, CreateCategoryUseCase } from '@modules'

let createCategory: CreateCategoryUseCase
let categoriesRepository: CategoriesRepositoryTest

describe('Create category', () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepositoryTest()
    createCategory = new CreateCategoryUseCase(categoriesRepository)
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
