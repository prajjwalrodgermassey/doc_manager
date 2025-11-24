import { Repository } from 'typeorm';
import { PaginationQueryParam } from '../dto/pagination-query-param.dto';

export const pagination = async <T extends object>(
  query: string,
  countQuery: string,
  parameters: string[],
  paginationParam: PaginationQueryParam,
  repo: Repository<T>,
) => {
  const column_array = Object.keys(repo.metadata.propertiesMap);

  if (!column_array.includes(paginationParam.order_by)) {
    return `Please send the correct column_name in the order_by field`;
  }

  const count = (await repo.query(countQuery, [...parameters])) as unknown as {
    total: string;
  }[];
  const total = Number(count[0].total);

  const page = paginationParam.page || 1;
  const per_page = paginationParam.per_page || 10;

  const offset = page * per_page - per_page;
  const to = page * per_page > total ? total : page * per_page;

  if (page > Math.ceil(total / per_page)) {
    return `Trying to access invalid page number`;
  }

  const data = (await repo.query(
    `${query} ORDER BY ${paginationParam.order_by || 'updated_at'} ${paginationParam.order || `desc`} LIMIT ? OFFSET ?`,
    [...parameters, paginationParam.per_page || 10, offset],
  )) as T;

  return { content: data, from: offset + 1, to, page, total: count[0].total };
};
