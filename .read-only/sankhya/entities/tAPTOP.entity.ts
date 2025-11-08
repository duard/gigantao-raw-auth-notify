import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TAPTOP', ['codproj', 'nometab', 'idobjeto', 'idtopografia'], {
  unique: true,
})
@Entity('TAPTOP', { schema: 'SANKHYA' })
export class TaptopEntity {
  @Column('int', { primary: true, name: 'CODPROJ' })
  codproj: number;

  @Column('varchar', { primary: true, name: 'NOMETAB', length: 32 })
  nometab: string;

  @Column('varchar', { primary: true, name: 'IDOBJETO', length: 50 })
  idobjeto: string;

  @Column('varchar', { primary: true, name: 'IDTOPOGRAFIA', length: 100 })
  idtopografia: string;

  @Column('float', { name: 'COORDX', nullable: true, precision: 53 })
  coordx: number | null;

  @Column('float', { name: 'COORDY', nullable: true, precision: 53 })
  coordy: number | null;

  @Column('float', { name: 'COORDZ', nullable: true, precision: 53 })
  coordz: number | null;

  @Column('float', { name: 'QUINTACOLUNA', nullable: true, precision: 53 })
  quintacoluna: number | null;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.taptops)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;
}
