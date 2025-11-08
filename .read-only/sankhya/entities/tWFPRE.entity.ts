import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TwfeleEntity } from './tWFELE.entity';

@Index('PK_TWFPRE', ['nuele', 'nome'], { unique: true })
@Entity('TWFPRE', { schema: 'SANKHYA' })
export class TwfpreEntity {
  @Column('int', { primary: true, name: 'NUELE' })
  nuele: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('text', { name: 'VALOR', nullable: true })
  valor: string | null;

  @ManyToOne(() => TwfeleEntity, (twfeleEntity) => twfeleEntity.twfpres)
  @JoinColumn([{ name: 'NUELE', referencedColumnName: 'nuele' }])
  nuele2: TwfeleEntity;
}
