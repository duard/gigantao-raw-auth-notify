import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TrsavrEntity } from './tRSAVR.entity';
import { TrsreqEntity } from './tRSREQ.entity';
import { TrsrneEntity } from './tRSRNE.entity';

@Index('PK_TRSMOT', ['codmotivo'], { unique: true })
@Entity('TRSMOT', { schema: 'SANKHYA' })
export class TrsmotEntity {
  @Column('int', { primary: true, name: 'CODMOTIVO' })
  codmotivo: number;

  @Column('char', { name: 'DESCRMOTIVO', nullable: true, length: 50 })
  descrmotivo: string | null;

  @Column('char', { name: 'TIPMOTIVO', length: 1, default: () => "'R'" })
  tipmotivo: string;

  @OneToMany(() => TrsavrEntity, (trsavrEntity) => trsavrEntity.codmotivo)
  trsavrs: TrsavrEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codmotivo)
  trsreqs: TrsreqEntity[];

  @OneToMany(() => TrsreqEntity, (trsreqEntity) => trsreqEntity.codmotivoaval)
  trsreqs2: TrsreqEntity[];

  @OneToMany(
    () => TrsrneEntity,
    (trsrneEntity) => trsrneEntity.codmotivonegacao,
  )
  trsrnes: TrsrneEntity[];
}
