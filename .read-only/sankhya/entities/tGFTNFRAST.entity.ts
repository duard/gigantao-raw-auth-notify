import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFTNFRAST', ['codemp', 'codtipoper'], { unique: true })
@Entity('TGFTNFRAST', { schema: 'SANKHYA' })
export class TgftnfrastEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 1 })
  tipo: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgftnfrasts)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
