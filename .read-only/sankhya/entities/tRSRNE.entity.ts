import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TrsmotEntity } from './tRSMOT.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TRSRNE', ['nunegacao', 'nurequisicao'], { unique: true })
@Entity('TRSRNE', { schema: 'SANKHYA' })
export class TrsrneEntity {
  @Column('int', { primary: true, name: 'NUNEGACAO' })
  nunegacao: number;

  @Column('int', { primary: true, name: 'NUREQUISICAO' })
  nurequisicao: number;

  @Column('datetime', { name: 'DHNEGACAO', default: () => 'getdate()' })
  dhnegacao: Date;

  @Column('varchar', { name: 'OBSNEGACAO', nullable: true, length: 250 })
  obsnegacao: string | null;

  @ManyToOne(() => TrsmotEntity, (trsmotEntity) => trsmotEntity.trsrnes)
  @JoinColumn([{ name: 'CODMOTIVONEGACAO', referencedColumnName: 'codmotivo' }])
  codmotivonegacao: TrsmotEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.trsrnes)
  @JoinColumn([{ name: 'CODUSUNEGACAO', referencedColumnName: 'codusu' }])
  codusunegacao: TsiusuEntity;
}
