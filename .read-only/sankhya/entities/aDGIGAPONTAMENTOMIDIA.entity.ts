import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('PK__ADGIGAPO__FBBB13A2E870E6CE', ['codmidia'], { unique: true })
@Entity('ADGIGAPONTAMENTOMIDIA', { schema: 'SANKHYA' })
export class AdgigapontamentomidiaEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODMIDIA' })
  codmidia: number;

  @Column('int', { name: 'CODAPONTAMENTO' })
  codapontamento: number;

  @Column('varchar', { name: 'URLMIDIA', length: 1000 })
  urlmidia: string;

  @Column('varchar', { name: 'TIPOMIDIA', length: 20 })
  tipomidia: string;

  @Column('varchar', { name: 'NOMEMIDIA', nullable: true, length: 255 })
  nomemidia: string | null;

  @Column('int', { name: 'ORDEMMIDIA', nullable: true })
  ordemmidia: number | null;

  @Column('int', { name: 'CODUSUINC' })
  codusuinc: number;

  @Column('datetime', { name: 'DTINCLUSAO', default: () => 'getdate()' })
  dtinclusao: Date;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;
}
