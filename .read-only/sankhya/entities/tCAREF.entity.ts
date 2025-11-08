import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcaanoEntity } from './tCAANO.entity';

@Index('PK_TCAREF', ['codano', 'codref', 'perini'], { unique: true })
@Entity('TCAREF', { schema: 'SANKHYA' })
export class TcarefEntity {
  @Column('smallint', { primary: true, name: 'CODANO' })
  codano: number;

  @Column('char', { primary: true, name: 'CODREF', length: 1 })
  codref: string;

  @Column('decimal', { primary: true, name: 'PERINI', precision: 15, scale: 4 })
  perini: number;

  @Column('decimal', {
    name: 'PERFIM',
    nullable: true,
    precision: 15,
    scale: 4,
  })
  perfim: number | null;

  @Column('char', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @ManyToOne(() => TcaanoEntity, (tcaanoEntity) => tcaanoEntity.tcarefs)
  @JoinColumn([{ name: 'CODANO', referencedColumnName: 'codano' }])
  codano2: TcaanoEntity;
}
