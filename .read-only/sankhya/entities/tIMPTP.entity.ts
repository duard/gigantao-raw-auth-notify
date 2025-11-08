import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimpprEntity } from './tIMPPR.entity';

@Index('PK_TIMPTP', ['ptpcodigo', 'ptpprospect'], { unique: true })
@Entity('TIMPTP', { schema: 'SANKHYA' })
export class TimptpEntity {
  @Column('int', { primary: true, name: 'PTPCODIGO' })
  ptpcodigo: number;

  @Column('int', { primary: true, name: 'PTPPROSPECT' })
  ptpprospect: number;

  @Column('varchar', { name: 'PTPTELEFONE', length: 200 })
  ptptelefone: string;

  @Column('varchar', { name: 'PTPCOMENTARIO', nullable: true, length: 200 })
  ptpcomentario: string | null;

  @Column('char', { name: 'PTPLEGADO', nullable: true, length: 1 })
  ptplegado: string | null;

  @ManyToOne(() => TimpprEntity, (timpprEntity) => timpprEntity.timptps)
  @JoinColumn([{ name: 'PTPPROSPECT', referencedColumnName: 'pprcodigo' }])
  ptpprospect2: TimpprEntity;
}
