import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('GFRCATEGCOMIS_CODCOM_PK', ['codcom'], { unique: true })
@Entity('GFRCATEGCOMIS', { schema: 'SANKHYA' })
export class GfrcategcomisEntity {
  @Column('int', { primary: true, name: 'CODCOM' })
  codcom: number;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.gfrcategcomis)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.gfrcategcomis)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod: TgfgruEntity;
}
