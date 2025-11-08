import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgwaraEntity } from './tGWARA.entity';
import { TgfparEntity } from './tGFPAR.entity';

@Index('PK_TGWAXPAR', ['nuarea', 'codparc'], { unique: true })
@Entity('TGWAXPAR', { schema: 'SANKHYA' })
export class TgwaxparEntity {
  @Column('int', { primary: true, name: 'NUAREA' })
  nuarea: number;

  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DTINI' })
  dtini: Date;

  @Column('datetime', { name: 'DTFIM' })
  dtfim: Date;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(() => TgwaraEntity, (tgwaraEntity) => tgwaraEntity.tgwaxpars)
  @JoinColumn([{ name: 'NUAREA', referencedColumnName: 'nuarea' }])
  nuarea2: TgwaraEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgwaxpars)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;
}
