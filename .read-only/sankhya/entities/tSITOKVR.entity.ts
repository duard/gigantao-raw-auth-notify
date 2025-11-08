import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsitokpvrEntity } from './tSITOKPVR.entity';

@Index('PK_TSITOKVR', ['codtok'], { unique: true })
@Entity('TSITOKVR', { schema: 'SANKHYA' })
export class TsitokvrEntity {
  @Column('decimal', { primary: true, name: 'CODTOK', precision: 10, scale: 0 })
  codtok: number;

  @Column('varchar', { name: 'CONTEUDO', length: 50 })
  conteudo: string;

  @OneToMany(
    () => TsitokpvrEntity,
    (tsitokpvrEntity) => tsitokpvrEntity.codtok2,
  )
  tsitokpvrs: TsitokpvrEntity[];
}
