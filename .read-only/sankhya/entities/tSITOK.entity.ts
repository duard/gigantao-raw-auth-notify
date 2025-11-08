import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TsitokpEntity } from './tSITOKP.entity';

@Index('PK_TSITOSK', ['codtok'], { unique: true })
@Entity('TSITOK', { schema: 'SANKHYA' })
export class TsitokEntity {
  @Column('decimal', { primary: true, name: 'CODTOK', precision: 10, scale: 0 })
  codtok: number;

  @Column('varchar', { name: 'CONTEUDO', length: 50 })
  conteudo: string;

  @OneToMany(() => TsitokpEntity, (tsitokpEntity) => tsitokpEntity.codtok2)
  tsitokps: TsitokpEntity[];
}
