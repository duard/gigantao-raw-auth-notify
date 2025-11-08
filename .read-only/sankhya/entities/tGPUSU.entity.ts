import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGPUSU', ['codparc', 'codempfunc', 'codfunc'], { unique: true })
@Index('TGPUSU_I01', ['nomeusuavaliador'], { unique: true })
@Entity('TGPUSU', { schema: 'SANKHYA' })
export class TgpusuEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('smallint', { primary: true, name: 'CODEMPFUNC' })
  codempfunc: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('char', { name: 'TIPO', length: 1, default: () => "'F'" })
  tipo: string;

  @Column('varchar', { name: 'NOMEUSUAVALIADOR', length: 30 })
  nomeusuavaliador: string;

  @Column('varchar', { name: 'SENHAAVALIADOR', length: 32 })
  senhaavaliador: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgpusus)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgpusus)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
