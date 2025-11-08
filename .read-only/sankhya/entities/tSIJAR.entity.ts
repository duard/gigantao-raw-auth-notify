import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsimodEntity } from './tSIMOD.entity';

@Index('PK_TSIJAR', ['codmodulo', 'codjar'], { unique: true })
@Index('TSIJAR_I01', ['codmodulo', 'descricao'], { unique: true })
@Entity('TSIJAR', { schema: 'SANKHYA' })
export class TsijarEntity {
  @Column('int', { primary: true, name: 'CODMODULO' })
  codmodulo: number;

  @Column('int', { primary: true, name: 'CODJAR' })
  codjar: number;

  @Column('varchar', { name: 'DESCRICAO', length: 255 })
  descricao: string;

  @Column('image', { name: 'ARQUIVO', nullable: true })
  arquivo: Buffer | null;

  @ManyToOne(() => TsimodEntity, (tsimodEntity) => tsimodEntity.tsijars)
  @JoinColumn([{ name: 'CODMODULO', referencedColumnName: 'codmodulo' }])
  codmodulo2: TsimodEntity;
}
