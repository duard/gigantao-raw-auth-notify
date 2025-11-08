import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TpqqueEntity } from './tPQQUE.entity';
import { TcsfldEntity } from './tCSFLD.entity';

@Index('PK_TCSQXF', ['codquest', 'codfld'], { unique: true })
@Entity('TCSQXF', { schema: 'SANKHYA' })
export class TcsqxfEntity {
  @Column('int', { primary: true, name: 'CODQUEST' })
  codquest: number;

  @Column('int', { primary: true, name: 'CODFLD' })
  codfld: number;

  @Column('int', { name: 'CODPERG', nullable: true })
  codperg: number | null;

  @Column('int', { name: 'CODRESP', nullable: true })
  codresp: number | null;

  @ManyToOne(() => TpqqueEntity, (tpqqueEntity) => tpqqueEntity.tcsqxfs)
  @JoinColumn([{ name: 'CODQUEST', referencedColumnName: 'codquest' }])
  codquest2: TpqqueEntity;

  @ManyToOne(() => TcsfldEntity, (tcsfldEntity) => tcsfldEntity.tcsqxfs)
  @JoinColumn([{ name: 'CODFLD', referencedColumnName: 'codfld' }])
  codfld2: TcsfldEntity;
}
