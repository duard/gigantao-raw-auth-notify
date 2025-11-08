import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_OCORRENCIAS', ['codocor'], { unique: true })
@Entity('AD_OCORRENCIAS', { schema: 'SANKHYA' })
export class AdOcorrenciasEntity {
  @Column('int', { primary: true, name: 'CODOCOR' })
  codocor: number;
}
