import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcaanoEntity } from './tCAANO.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TcaserEntity } from './tCASER.entity';

@Index('PK_TCAPRE', ['codemp', 'codano', 'codcur', 'codser'], { unique: true })
@Entity('TCAPRE', { schema: 'SANKHYA' })
export class TcapreEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODANO' })
  codano: number;

  @Column('char', { primary: true, name: 'CODCUR', length: 15 })
  codcur: string;

  @Column('char', { primary: true, name: 'CODSER', length: 2 })
  codser: string;

  @Column('decimal', {
    name: 'VLRMATRICULA',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  vlrmatricula: number | null;

  @Column('decimal', {
    name: 'VLRTOTMENSALIDADE',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  vlrtotmensalidade: number | null;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcapres)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano2: TcaanoEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcapres)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;

  @ManyToOne(() => TcaserEntity, (tcaserEntity) => tcaserEntity.tcapres)
  @JoinColumn([
    { name: 'CODSER', referencedColumnName: 'codser' },
    { name: 'CODCUR', referencedColumnName: 'codcur' },
  ])
  tcaser: TcaserEntity;
}
